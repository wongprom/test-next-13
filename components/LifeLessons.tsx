'use client';
import { GET_LIFE_LESSONS } from '@/app/api/graphql/queries';
import { useQuery } from '@apollo/client';
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from './shadcn/ui/card';
import { HeartIcon } from 'lucide-react';
import { Author, LifeLesson } from '@/types/types';

/**
 * info if (!data) return <p>return SKELETON...</p>;
 * info make like clickable and change "hearts count"
 *
 */

const LifeLessons = () => {
  const { data } = useQuery(GET_LIFE_LESSONS);
  if (!data) return <p>return SKELETON...</p>;

  return (
    <div className="columns-1 lg:columns-2 xl:columns-3 ">
      {data.lifeLessions.map((lifeLesson: LifeLesson) => (
        <Card
          key={lifeLesson.id}
          className="group hover:dark hover:scale-105 my-4 first:my-0 break-inside-avoid-column"
        >
          <CardHeader className="">Nr {lifeLesson.sequense}.</CardHeader>
          <CardContent className="">
            <em>{lifeLesson.lession}</em>
          </CardContent>
          <CardFooter className="justify-between">
            <CardDescription className="heart-likes flex items-center gap-2">
              <HeartIcon />
              <em className="text-red-300">{lifeLesson.likes}</em>
            </CardDescription>
            <CardDescription className="author">
              {lifeLesson.author.length === 0
                ? ''
                : lifeLesson.author.map((writer: Author, index: number) => (
                    <em key={index}>- {writer.name}</em>
                  ))}
            </CardDescription>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default LifeLessons;
