import Image from 'next/image'
import { data } from '../_data/db';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card'

export default function Home() {
  const state = data.recipes
  console.log('State: ', state)
  return (
    <main>
      <div className="grid grid-cols-3 gap-8">
        {state.map(recipe => (
          <Card key={recipe.id} className="flex flex-col justify-between">
            <CardHeader className="flex-row gap-4 items-center">
              <div>
                <CardTitle>{recipe.title}</CardTitle>
                <CardDescription>{recipe.time} mins to cook.</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>{recipe.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <button>View Recipe</button>
              {recipe.vegan && <p>Vegan!</p>}
            </CardFooter>
          </Card>
        ))}
      </div>  
    </main>
  )
}
