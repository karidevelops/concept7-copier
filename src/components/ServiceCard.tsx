import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  buttonText: string;
  onButtonClick: () => void;
}

const ServiceCard = ({ title, description, price, buttonText, onButtonClick }: ServiceCardProps) => {
  return (
    <Card className="p-6 md:p-8 flex flex-col h-full hover:shadow-lg transition-all duration-300 border border-border bg-card">
      <h3 className="text-xl md:text-2xl font-semibold text-card-foreground mb-4">
        {title}
      </h3>
      <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
        {description}
      </p>
      <div className="mt-auto">
        <p className="text-lg font-semibold text-card-foreground mb-4">
          {price}
        </p>
        <Button 
          variant="accent" 
          className="w-full"
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      </div>
    </Card>
  );
};

export default ServiceCard;
