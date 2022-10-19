import { prisma } from "@prisma/client";
import { useState } from "react";
import { useEffect } from "react";

export default function Page() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [city, setCity] = useState("");
	const [APIResponse, setAPIResponse] = useState(null);
	const [search, setSearch] = useState('');

	useEffect(() => {
		console.log("firstName", firstName);
		console.log("lastName", lastName);
		console.log("email", email);
		console.log("city", city);
		console.log("APIReponse", APIResponse);
	}, [firstName, lastName, email, city, APIResponse]);

	/* 	const readDB = async () => {
		try {
			const response = await fetch("/api/input", {
				method: "GET",
				headers: { "Content-Type": "application/json" },
			});
			setAPIResponse(await response.json());
			if (response.status !== 200) {
				console.log("something went wrong");
			} else {
				console.log("form submitted successfully !!!");
			}
		} catch (error) {
			console.log("There was an error reading from the database", error);
		}
	}; */

	const handleSubmit = async (e) => {
		e.preventDefault();
		const body = { firstName, lastName, email, city };
		try {
			const response = await fetch("/api/input", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(body),
			});
			if (response.status !== 200) {
				console.log("something went wrong");
				//set an error banner here
			} else {
				resetForm();
				/* 		readDB();  */
				console.log("form submitted successfully");
				//set a success banner here
			}
			//check response, if success is false, dont take them to success page
		} catch (error) {
			console.log("there was an error submitting", error);
		}
	};

	const handleSearch = async (e) => {
		e.preventDefault();
		let res = null

		try {
			const response = await fetch(`/api/search/${search}`);

			if (!response.ok) {
				throw new Error('something went wrong')
				return
			}

			res = await response.json()
		} catch (error) {
			console.log("there was an error submitting", error);
		}

		setAPIResponse(res)
	};

	const resetForm = () => {
		setFirstName("");
		setLastName("");
		setEmail("");
		setCity("");
	};

	const formatUsers = (users) => users.map(u => u.firstname)

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

      
      <footer className="footer">Footer
        {/* <FooterNav /> */}
      </footer>
    </div >
			<form action="#" method="POST">
				<div className="formfield">
					<label htmlFor="first-name">First name</label>
					<input
						onChange={(e) => setFirstName(e.target.value)}
						type="text"
						name="first-name"
						id="first-name"
						autoComplete="given-name"
					/>
				</div>

				<div className="formfield">
					<label htmlFor="last-name">First name</label>
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
					<input
						onChange={(e) => setCity(e.target.value)}
						type="text"
						name="city"
						id="city"
						autoComplete="given-name"
					/>
				</div>



				<div className="formfield">
					<label htmlFor="Search">Search</label>
					<input
						onChange={(e) => setSearch(e.target.value)}
						type="text"
						name="search"
						id="search"
					/>
				</div>

				<div>
					<button onClick={handleSubmit} type="submit">
						Save
					</button>
					<button onClick={handleSearch} type="button">
						Search
					</button>
				</div>
			</form>

			<div>
				<h3>Users:</h3> 
				{APIResponse && formatUsers(APIResponse.users).map((user, i) => (
					<p key={i}>{user}</p>
				))}
			</div>
		</>
	);
}
