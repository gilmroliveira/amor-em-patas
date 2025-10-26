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
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in">
      <div className="relative overflow-hidden aspect-square">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4">
          <button
            className="bg-background/80 backdrop-blur-sm p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Favoritar"
          >
            <Heart className="h-5 w-5" />
          </button>
        </div>
      </div>
      <CardContent className="p-6">
        <div className="mb-3">
          <h3 className="text-2xl font-bold mb-1">{name}</h3>
          <p className="text-sm text-muted-foreground">
            {type} • {age}
          </p>
        </div>
        <p className="text-foreground/80 mb-4 line-clamp-2">{description}</p>
        <Button variant="default" className="w-full">
          Conhecer {name}
        </Button>
      </CardContent>
    </Card>
  );
};

export default AnimalCard;
