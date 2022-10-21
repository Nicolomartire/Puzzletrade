const CardPuzzle = (props) => {
	const { namnpuzzle, pieces, description } = props;

	return (
		<div className="container">
			<div className="puzzle">
				<p>
					{namnpuzzle} {pieces}
				</p>

			
				<div>
					<span> {description}</span>
					<h3>{namnpuzzle} </h3>
				</div>
                <div>
					<img src="./images.jpeg" alt="Bild på pussel"></img>
				</div>
			</div>
		</div>
	);
};

export default CardPuzzle;
