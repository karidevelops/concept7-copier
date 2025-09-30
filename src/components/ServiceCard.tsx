import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  buttonText: string;
  onButtonClick: () => void;
  isPopular?: boolean;
}

const ServiceCard = ({ title, description, price, buttonText, onButtonClick, isPopular }: ServiceCardProps) => {
  return (
    <Card className="p-8 flex flex-col h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-border bg-card group relative overflow-hidden">
      {isPopular && (
        <div className="absolute top-4 -right-10 bg-accent text-accent-foreground px-14 py-2 rotate-45 text-sm font-bold uppercase tracking-wide shadow-lg">
          Suosituin
        </div>
      )}
      <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
        <div className="w-8 h-8 rounded-full bg-accent group-hover:bg-white"></div>
      </div>
      <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300 uppercase tracking-wide">
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
          className="w-full bg-accent hover:bg-accent-dark text-accent-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-300 uppercase tracking-wide"
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      </div>
    </Card>
  );
};

export default ServiceCard;
