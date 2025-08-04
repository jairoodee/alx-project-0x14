# MoviesDatabase API Documentation

## API Overview

The MoviesDatabase API provides comprehensive information about movies, TV shows, and actors. It includes:
- YouTube trailer URLs
- Awards information
- Full biographies
- And many other useful details

The API offers complete and updated data for:
- Over 9 million titles (movies, series, and episodes)
- Over 11 million actors/crew/cast members

## API Version
v1

## Authentication
To use the API, you need to:
1. Sign up on RapidAPI
2. Subscribe to the MoviesDatabase API
3. Obtain your API key from your RapidAPI dashboard

## Base URL
https://moviesdatabase.p.rapidapi.com

## Available Endpoints

Every endpoint returns and object with 'results' key. Endpoints with pages has additional keys -> 'page', 'next', 'entries'

ALL query parameters are OPTIONAL

* Titles

Query parameters and model are explain below, in 'Description Of Optionals Query Parameters' and 'Description Of The Information (Models)'

a. Titles - Multiple:
    - path: /titles
    - description: returns array of titles according to filters / sorting query parameters provided
    - query parameters: multiple, unique query parameter 'list' that sets the collection you want to query - options available in Utils - Titles Lists
    - model: title

b. Titles - By List of Id's:
    - path: /x/titles-by-ids
    - description: returns array of titles according to array of id's provided
    - query parameters: - info - list ( unique query parameter that sets the collection you want to query) - options available in Utils - Titles Lists - idsList ( the list of id's, must be an array of strings)
    - model: title

c. Title
    - path: /titles/{id}
    - path parameter (required) : id -> imdb id of title
    - description: returns title acording to filters / sorting query parameters provided
    - query parameters: info
    - model: title

d. Title Rating
    - path: /titles/{id}/ratings
    - path parameter (required) : id -> imdb id of title
    - description: returns title rating and votes number
    - query parameters: -
    - model: rating

e. Seasons and Episodes
    - path: /titles/series/{id}
    - path parameter (required) : id -> imdb id of series
    - description: returns array of episodes only with episode id, episode number and season number in ascending order
    - query parameters: -
    - model: light episode

f. Seasons Number
    - path: /titles/seasons/{id}
    - path parameter (required) : id -> imdb id of series
    - description: returns number of seasons for the series (integer)
    - query parameters: -
    - model: light episode

g. Episodes Id`s By Series Id and Season
    - path: /titles/series/{id}/{season}
    - path parameter (required) : id -> imdb id of series, season -> season number
    - description: returns array of episodes only with episode id, season number and episode number (only of the season provided in path)
    - query parameters: -
    - model: light episode

h. Episode
    - path: /titles/episode/{id}
    - path parameter (required) : id -> imdb id of episode
    - description: returns episode according to filters / sorting query parameters provided
    - query parameters: info
    - model: title

i. Upcoming Titles
    - path: /titles/x/upcoming
    - description: returns array of upcoming titles according to filters / sorting query parameters provided
    - query parameters: multiple
    - model: title

* Search
    a. Titles by Keyword
    - path: /titles/search/keyword/{keyword}
    - path parameter (required) : keyword
    - description: returns array of titles according to filters / sorting query parameters provided and the keyword provided in path
    - query parameters: multiple
    - model: title

    b. Titles by Title
    - path: /titles/search/title/{title}
    - path parameter (required) : title -> a title or part of a title
    - description: returns array of titles according to filters / sorting query parameters provided and the title provided in path
    - query parameters: *multiple, uniq query parameter exact that sets the looku to be exact default : false
    - model: title

    c. Titles by Aka's
    - path: /titles/search/akas/{aka}
    - path parameter (required) :aka -> a aka of a title ( exact only and case sensitive )
    - description: returns array of titles according to filters / sorting query parameters provided and the aka provided in path, work only for exact matches
    - query parameters: multiple
    - model: title

* Actors
    a. Actors
        - path: /actors
        - description: returns array of actors according to filters provided
        - query parameters:
        
    b. Actor By Id
        - path: /actors/{id}
        - path parameter (required) : imdb id of actor
        - description: returns actor details
        - model: actor

* Utils
    a. Title Type
        - path: /title/utils/titleType
        - description: returs array of title types

    b. Genres
        - path: /title/utils/titleType
        - description: returs array of genres

    c. Titles Lists
        - path: /title/utils/lists
        - description: returns array of lists (for 'list' query parameter)

## Request Format

All requests must include:
- X-RapidAPI-Key header with your API key
- X-RapidAPI-Host header with 'moviesdatabase.p.rapidapi.com'

### Example Request Headers
```http
X-RapidAPI-Key: YOUR_API_KEY
X-RapidAPI-Host: moviesdatabase.p.rapidapi.com
```

## Response Format

All responses are returned in JSON format. The structure depends on the specific endpoint, but generally includes:
- `results`: Array containing the main data
- `page`: Current page number (for paginated endpoints)
- `next`: URL for next page (if available)
- `entries`: Total number of entries

## Authentication

### API Key Requirements
- All requests require an API key from RapidAPI
- API key must be included in the request headers
- API key is specific to your RapidAPI account

### Rate Limits
- The API has rate limits based on your subscription tier
- Exceeding rate limits will result in 429 (Too Many Requests) responses
- Check your subscription plan on RapidAPI for specific limits

### Security Best Practices
- Never expose your API key in client-side code
- Store API keys in environment variables
- Use proper authentication middleware in your application
- Regularly rotate API keys

## Error Handling

### Common Error Codes
- **400 Bad Request**: Invalid request parameters or format
- **401 Unauthorized**: Missing or invalid API key
- **403 Forbidden**: Insufficient permissions or subscription tier
- **404 Not Found**: Resource not found
- **429 Too Many Requests**: Rate limit exceeded
- **500 Internal Server Error**: Server error

### Error Response Format
```json
{
    "error": {
        "code": "error_code",
        "message": "error description",
        "details": "additional error information"
    }
}
```

### Handling Errors
1. Always check for error responses
2. Implement retry logic for 429 errors
3. Log errors for debugging
4. Handle different error codes appropriately

## Usage Limits

### Rate Limits
- Requests per minute: Depends on subscription tier
- Concurrent requests: Limited based on plan
- Burst rate: May vary by subscription

### Data Limits
- Maximum results per page: 1000
- Maximum search depth: 10000 results
- Maximum concurrent searches: 5

### Best Practices
1. **Caching**
   - Cache frequently accessed data
   - Implement proper cache invalidation
   - Use appropriate cache durations

2. **Pagination**
   - Always use pagination for large result sets
   - Handle `next` URLs in responses
   - Implement proper error handling for pagination

3. **Error Handling**
   - Implement comprehensive error handling
   - Retry failed requests with exponential backoff
   - Log errors for debugging

4. **Rate Limiting**
   - Implement rate limiting in your application
   - Monitor API usage
   - Handle 429 responses gracefully

5. **Data Processing**
   - Process data in batches
   - Implement proper error handling for data processing
   - Validate data before processing

6. **API Key Management**
   - Store API keys securely
   - Rotate API keys periodically
   - Monitor API key usage
   - Implement proper access controls