// import { prisma } from "@prisma/client";
import { useEffect, useState } from "react";
import Card from 'components/Card'

export default function Page() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [city, setCity] = useState("");
	const [APIResponse, setAPIResponse] = useState(null);
	const [search, setSearch] = useState("");
	const [searchType, setSearchType] = useState("user");

	const [piece, setPiece] = useState("");
	const [genre, setGenre] = useState("");

	useEffect(() => {
		console.log("firstName", firstName);
		console.log("lastName", lastName);
		console.log("email", email);
		console.log("city", city);
		console.log("APIReponse", APIResponse);
	}, [firstName, lastName, email, city, APIResponse]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const body = { firstName, lastName, email, city, piece, genre };
		try {
			const response = await fetch("/api/users/add", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(body),
			});
			if (response.status !== 200) {
				console.log("something went wrong");
			} else {
				resetForm();
				/* 		readDB();  */
				console.log("form submitted successfully");
			}
		} catch (error) {
			console.log("there was an error submitting", error);
		}
	};

	const handleSearch = async (e) => {
		e.preventDefault();
		let res = null;

		try {
			const response = await fetch(`/api/search/${search}?type=user`);

			if (!response.ok) {
				throw new Error("something went wrong");
				return;
			}

			res = await response.json();
		} catch (error) {
			console.log("there was an error submitting", error);
		}

		setSearchType('user')
		setAPIResponse(res);
	};

	const handleSearchPiece = async (e) => {
		e.preventDefault();
		let res = null;

		try {
			const response = await fetch(`/api/search/${search}?type=puzzle`);

			if (!response.ok) {
				throw new Error("something went wrong");
				return;
			}

			res = await response.json();
		} catch (error) {
			console.log("there was an error submitting", error);
		}

		setSearchType('puzzle')
		setAPIResponse(res);
	};

	const resetForm = () => {
		setFirstName("");
		setLastName("");
		setEmail("");
		setCity("");
		setPiece("");
		setGenre("");
	};

	const formatUsersCity = (users) => users.map((u) => u.city);

	const formatUsersPiece = (users) => users.map((u) => u.piece);

	console.log('searc', searchType)
	return (
		<>
			<div className="wrapper">
				{/* <header className="header">Puzzle Header</header> */}

				<ul className="flex-container">
					<li className="flex-item">1</li>
					<li className="flex-item">2</li>
					<li className="flex-item">3</li>
					<li className="flex-item">4</li>
					<li className="flex-item">5</li>
					<li className="flex-item">6</li>
				</ul>

				<footer className="footer">
					Footer
					{/* <FooterNav /> */}
				</footer>
			</div>
			<form action="#" method="POST">
				<div className="formfield">
					<label htmlFor="first-name">First name</label>
					<br></br>
					<input
						onChange={(e) => setFirstName(e.target.value)}
						type="text"
						name="first-name"
						id="first-name"
						autoComplete="given-name"
					/>
				</div>

				<div className="formfield">
					<label htmlFor="last-name">Last name</label>
					<br></br>
					<input
						onChange={(e) => setLastName(e.target.value)}
						type="text"
						name="last-name"
						id="last-name"
						autoComplete="given-name"
					/>
				</div>

				<div className="formfield">
					<label htmlFor="first-name">E-mail</label>
					<br></br>
					<input
						onChange={(e) => setEmail(e.target.value)}
						type="text"
						name="E-mail"
						id="E-mail"
						autoComplete="given-name"
					/>
				</div>

				<div className="formfield">
					<label htmlFor="City">City</label>
					<br></br>
					<input
						onChange={(e) => setCity(e.target.value)}
						type="text"
						name="city"
						id="city"
						autoComplete="given-name"
					/>
				</div>

				<div className="formfield">
					<label htmlFor="Pieces">Pieces</label>
					<br></br>
					<input onChange={(e) => setPiece(e.target.value)} type="text" name="pieces" id="pieces" />
				</div>

				<div className="formfield">
					<label htmlFor="Pieces">Genre</label>
					<br></br>
					<input onChange={(e) => setGenre(e.target.value)} type="text" name="genre" id="genre" />
				</div>

				<button onClick={handleSubmit} type="submit">
					Save
				</button>

				<div className="formfield">
					<label htmlFor="Search">Search</label>
					<br></br>
					<input
						onChange={(e) => setSearch(e.target.value)}
						type="text"
						name="search"
						id="search"
					/>
				</div>

				<div>
					<button onClick={handleSearch} type="button">
						Search City
					</button>

					<button onClick={handleSearchPiece} type="button">
						Search Pieces
					</button>
				</div>
			</form>

			<div>
				<h3>Pusselplatser:</h3>
				{/* Orter */}
				{APIResponse && APIResponse.result.map((item, i) =>  
					searchType === 'user' ? (
						<Card key={i} firstname={item.firstname} lastname={item.lastname} email={item.email} />
					) : (
					<div key={i}>
						<p>{item.namnpuzzle}</p>
						<p>{item.description}</p>
						<p>{item.pieces}</p>
						<p>{item.picture}</p>
						<p>{item.author}</p>
					</div>
					))}

				{/* Pieces */}
				{/* {APIResponse && formatUsersCity(APIResponse.users).map((user, i) => <p key={i}>{user}</p>)} */}
			</div>
		</>
	);
}
