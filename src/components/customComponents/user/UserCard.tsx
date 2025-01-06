import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { deleteUser } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hooks";
import { TUserInfo } from "@/types/types";

interface userInfo {
  user: TUserInfo;
}

export function UserCard({ user }: userInfo) {
  const dipatch = useAppDispatch();
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>{user.userName}</CardTitle>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="flex justify-between">
        <Button
          onClick={() => dipatch(deleteUser(user.id))}
          variant="destructive"
        >
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}
