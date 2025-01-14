import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

interface Props {
  description: string;
  title: string;
}

const NotFoundComponent = ({ title, description }: Props) => {
  return (
    <div className="flex min-h-screen  flex-col items-center justify-center gap-2">
      <Alert
        variant="destructive"
        className="bg-white text-primary-900 px-2 py-4"
      >
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>{description}</AlertDescription>
      </Alert>
    </div>
  );
};

export default NotFoundComponent;
