import React from "react";
import "./profile.css";

import { useQuery, useMutation } from "@apollo/client";
import { QUERY_HOBBY_FANS } from "../../utils/queries";
import AddFriend from "../../components/Modal/Addfriend";

const SearchResults = ({ globalHobbyId }) => {
	console.log(globalHobbyId);

	const { loading, error, data } = useQuery(QUERY_HOBBY_FANS, {
		variables: { hobbyId: globalHobbyId },
	});

	if (error) {
		console.log(JSON.stringify(error));
	}

	const hobbyFans = data?.hobbyFans || [];
	console.log(hobbyFans);

	return (
		<div className="profileBackground">
			<div className="profileContainer">
				<div>
					{hobbyFans.map((hobbyFan) => (
						<div className="profileCard" id={hobbyFan._id}>
							<h2>{hobbyFan.firstName}</h2>

							<div className="profile">
								<div className="img-container">
									<img src={hobbyFan.photo} alt={"photo of " + hobbyFan.firstName} />
								</div>
							</div>
							<h4>{hobbyFan.city}</h4>

							<h5>{hobbyFan.age}</h5>
							<h5>{hobbyFan.description}</h5>
							<AddFriend hobbyFanId={hobbyFan.id} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

// hello

export default SearchResults;
