"use client"

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
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Nav from '@/components/nav';
import { useEffect, useState } from 'react';

interface Recipe {
  id: string;
  title: string;
  image: string;
  time: number;
  description: string;
  vegan: boolean;
}


export default async function Home() {
  const [state, setState] = useState<Recipe[]>([])

  useEffect(() => {
    setTimeout(() => setState(data?.recipes), 1000)
  }, [])

  // console.log(state)
  return (
    <>
      <main>
        <div className="grid grid-cols-3 gap-8">
          {state?.map(recipe => (
            <Card key={recipe.id} className="flex flex-col justify-between">
              <CardHeader className="flex-row gap-4 items-center">
                <Avatar>
                  <AvatarImage src={`/img/${recipe.image}`} alt="image" />
                  <AvatarFallback>
                    {recipe.title.slice(0,2)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>{recipe.title}</CardTitle>
                  <CardDescription>{recipe.time} mins to cook.</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p>{recipe.description}</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button>View Recipe</Button>
                {recipe.vegan && <Badge variant='secondary'>Vegan!</Badge>}
              </CardFooter>
            </Card>
          ))}
        </div>  
      </main>
    </>
  )
}
