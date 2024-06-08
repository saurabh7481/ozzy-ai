import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import UserTypeCard from "./user-type-card";

type Props = {
	register: UseFormRegister<FieldValues>;
	userType: "Owner" | "Student";
	setUserType: React.Dispatch<React.SetStateAction<"Owner" | "Student">>;
};

const TypeSelectionForm = ({ register, setUserType, userType }: Props) => {
	return (
		<>
			<h2 className="text-gravel md:text-4xl font-bold">
				<p className="text-iridium md:text-sm">
					Tell us about yourself! What do you do? Let&apos;s tailor your{" "}
					<br /> experience so it best suits you.
				</p>
				<UserTypeCard
					register={register}
					setUserType={setUserType}
					text="I own a business"
					title="Owner"
					value="Owner"
					userType={userType}
				></UserTypeCard>
			</h2>
		</>
	);
};

export default TypeSelectionForm;
