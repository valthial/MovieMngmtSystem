using Microsoft.Extensions.DependencyInjection;
using MovieMngmtSystem.Application.Services;
using MovieMngmtSystem.Domain.Interfaces.Services;

namespace MovieMngmtSystem.Application;

public static class DependencyInjection
{
    public static IServiceCollection AddApplication(this IServiceCollection services)
    {
        services.AddScoped<IMovieService, MovieService>();
        return services;
    }
}