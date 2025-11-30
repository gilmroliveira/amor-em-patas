import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

interface AnimalCardProps {
  name: string;
  age: string;
  type: string;
  image: string;
  description: string;
}

const AnimalCard = ({ name, age, type, image, description }: AnimalCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-2 right-2">
          <button
            className="bg-background/80 backdrop-blur-sm p-1.5 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Favoritar"
          >
            <Heart className="h-4 w-4" />
          </button>
        </div>
      </div>
      <CardContent className="p-3">
        <div className="mb-2">
          <h3 className="text-lg font-bold mb-0.5">{name}</h3>
          <p className="text-xs text-muted-foreground">
            {type} • {age}
          </p>
        </div>
        <p className="text-sm text-foreground/80 mb-3 line-clamp-2">{description}</p>
        <Button variant="default" size="sm" className="w-full">
          Conhecer {name}
        </Button>
      </CardContent>
    </Card>
  );
};

export default AnimalCard;
