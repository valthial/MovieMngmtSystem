using Microsoft.EntityFrameworkCore;
using MovieMngmtSystem.Domain.Entities;
using MovieMngmtSystem.Domain.Interfaces.Repositories;
using MovieMngmtSystem.Infrastructure.Data;

namespace MovieMngmtSystem.Infrastructure.Repositories;

public class MovieRepository(ApplicationDbContext context) : IMovieRepository
{
    public async Task CreateMovieAsync(Movie? movie)
    {
        context.Movies.Add(movie);
        await context.SaveChangesAsync();
    }

    public async Task<Movie?> GetMovieByIdAsync(int movieId)
    {
        return await context.Movies.FindAsync(movieId);
    }

    public async Task<IEnumerable<Movie?>> GetAllMoviesAsync()
    {
        return await context.Movies.ToListAsync();
    }
}