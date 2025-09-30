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
    <Card className="p-8 flex flex-col h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-0 bg-white/95 backdrop-blur-sm group">
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
        <div className="w-8 h-8 rounded-full bg-primary group-hover:bg-white"></div>
      </div>
      <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300 uppercase tracking-wide">
        {title}
      </h3>
      <p className="text-muted-foreground mb-6 flex-grow leading-relaxed text-base">
        {description}
      </p>
      <div className="mt-auto">
        <p className="text-xl font-bold text-foreground mb-6">
          {price}
        </p>
        <Button 
          className="w-full bg-primary hover:bg-primary-dark text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-300 uppercase tracking-wide"
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      </div>
    </Card>
  );
};

export default ServiceCard;
