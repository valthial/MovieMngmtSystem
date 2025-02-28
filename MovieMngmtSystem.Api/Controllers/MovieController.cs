using Microsoft.AspNetCore.Mvc;
using MovieMngmtSystem.Api.DTOs;
using MovieMngmtSystem.Domain.Entities;
using MovieMngmtSystem.Domain.Interfaces.Services;

namespace MovieMngmtSystem.Api.Controllers;

[ApiController]
[Route("api/movies")]
public class MoviesController(IMovieService movieService) : ControllerBase
{
    [HttpPost]
    public async Task<ActionResult> AddMovie([FromBody] MovieDto movieDto)
    {
        var movie = Movie.Create(movieDto.Title, movieDto.Description, movieDto.ReleaseDate, movieDto.ImageUrl,
            movieDto.Rating, movieDto.TrailerUrl);

        await movieService.CreateMovieAsync(movie);
        return Ok(movie);
    }
}
