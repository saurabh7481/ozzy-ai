import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

type Props = {
	value: string;
	title: string;
	text: string;
	register: UseFormRegister<FieldValues>;
	userType: "Owner" | "Student";
	setUserType: React.Dispatch<React.SetStateAction<"Owner" | "Student">>;
};

const UserTypeCard = ({
	register,
	setUserType,
	text,
	title,
	userType,
	value,
}: Props) => {
	return (
		<Label>
			<Card
				className={cn(
					"w-full cursor-pointer",
					userType === value && "border-orange"
				)}
			>
				<CardContent className="flex justify-between p-2">
					<div className="flex items-center gap-2">
						<Card
							className={cn(
								"flex justify-center p-3",
								userType === value && "border-orange"
							)}
						>
							<User
								size={30}
								className={cn(
									userType === value
										? "text-orange"
										: "text-gray-400"
								)}
							/>
						</Card>
					</div>
				</CardContent>
			</Card>
		</Label>
	);
};

export default UserTypeCard;
