using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using MovieMngmtSystem.Domain.Interfaces.Repositories;
using MovieMngmtSystem.Infrastructure.Repositories;
using MovieMngmtSystem.Infrastructure.Data;

namespace MovieMngmtSystem.Infrastructure;

public static class DependencyInjection
{
    public static IServiceCollection AddInfrastructure(
        this IServiceCollection services, string? connectionString)
    {
        services.AddDbContext<ApplicationDbContext>(options =>
            options.UseNpgsql(connectionString));

        services.AddScoped<IMovieRepository, MovieRepository>();
        
        return services;
    }
}