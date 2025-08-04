import React from 'react';
import Link from 'next/link';

interface MovieCardProps {
  id: string;
  title: string;
  posterPath?: string;
  releaseDate?: string;
  voteAverage?: number;
  className?: string;
}

const MovieCard: React.FC<MovieCardProps> = ({
  id,
  title,
  posterPath,
  releaseDate,
  voteAverage,
  className = '',
}) => {
  const posterUrl = posterPath
    ? `https://image.tmdb.org/t/p/w500${posterPath}`
    : '/default-movie-poster.jpg';

  return (
    <div
      className={`group relative overflow-hidden rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl ${className}`}
    >
      <Link href={`/movie/${id}`} className="block">
        <img
          src={posterUrl}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-200 group-hover:scale-105"
        />
      </Link>
      <div className="p-4 bg-white">
        <h3 className="text-lg font-semibold mb-2 truncate">{title}</h3>
        {releaseDate && (
          <p className="text-sm text-gray-600 mb-2">
            {new Date(releaseDate).getFullYear()}
          </p>
        )}
        {voteAverage !== undefined && (
          <div className="flex items-center">
            <span className="text-sm text-yellow-500">{voteAverage.toFixed(1)}</span>
            <span className="text-sm text-gray-500 ml-1">/10</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
