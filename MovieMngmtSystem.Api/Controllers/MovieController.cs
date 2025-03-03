using Microsoft.AspNetCore.Mvc;
using MovieMngmtSystem.Api.DTOs;
using MovieMngmtSystem.Domain.Entities;
using MovieMngmtSystem.Domain.Interfaces.Services;

namespace MovieMngmtSystem.Api.Controllers;

[ApiController]
[Route("api/movies")]
public class MoviesController(IMovieService movieService) : ControllerBase
{
    [HttpPost("create")]
    public async Task<ActionResult> AddMovie([FromBody] MovieDto movieDto)
    {
        var movie = Movie.Create(movieDto.Title, movieDto.Description, movieDto.ReleaseDate, movieDto.ImageUrl,
            movieDto.Rating, movieDto.TrailerUrl);

        await movieService.AddMovieAsync(movie);
        return Ok(movie);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<MovieDto>> GetMovieByIdAsync(int id)
    {
        var movie = await movieService.GetMovieByIdAsync(id);
        return Ok(movie);
    }

    [HttpGet("getAll")]
    public async Task<ActionResult<IEnumerable<MovieDto>>> GetAllMovies()
    {
        var movies = await movieService.GetAllMoviesAsync();
        return Ok(movies.Select(m => new MovieDto
        {
            Title = m.Title,
            Description = m.Description,
            ReleaseDate = m.ReleaseDate,
            TrailerUrl = m.TrailerUrl,
            ImageUrl = m.ImageUrl,
            Rating = m.Rating
        }));
    }
}
