using Microsoft.AspNetCore.Mvc;
using Moq;
using MovieMngmtSystem.Api.Controllers;
using MovieMngmtSystem.Api.DTOs;
using MovieMngmtSystem.Domain.Entities;
using MovieMngmtSystem.Domain.Interfaces.Services;

namespace MovieMngmtSystem.UnitTests
{
    public class MoviesControllerTests
    {
        private readonly Mock<IMovieService> _mockMovieService;
        private readonly MoviesController _moviesController;

        public MoviesControllerTests()
        {
            _mockMovieService = new Mock<IMovieService>();
            _moviesController = new MoviesController(_mockMovieService.Object);
        }

        [Fact]
        public async Task AddMovie_ReturnsOkResult_WithMovie()
        {
            var movieDto = new MovieDto
            {
                Title = "Inception",
                Description = "A mind-bending movie",
                ReleaseDate = DateTimeOffset.Now,
                ImageUrl = "http://example.com/image.jpg",
                Rating = 8.8m,
                TrailerUrl = "http://example.com/trailer.mp4"
            };

            var movie = Movie.Create(movieDto.Title, movieDto.Description, movieDto.ReleaseDate, movieDto.ImageUrl, movieDto.Rating, movieDto.TrailerUrl);

            _mockMovieService.Setup(service => service.AddMovieAsync(It.IsAny<Movie>()))
                .ReturnsAsync(movie);

            var result = await _moviesController.AddMovie(movieDto);

            var okResult = Assert.IsType<OkObjectResult>(result);
            var returnMovie = Assert.IsType<Movie>(okResult.Value);
            Assert.Equal(movieDto.Title, returnMovie.Title);
        }

        [Fact]
        public async Task GetMovieById_ReturnsNotFound_WhenMovieDoesNotExist()
        {
            _mockMovieService.Setup(service => service.GetMovieByIdAsync(It.IsAny<int>()))
                .ReturnsAsync((Movie)null);

            var result = await _moviesController.GetMovieByIdAsync(1);

            Assert.IsType<NotFoundResult>(result.Result);
        }

        [Fact]
        public async Task GetMovieById_ReturnsOkResult_WithMovie()
        {
            var movie = Movie.Create("Shrek 5", "very nice shrek description", DateTimeOffset.Now,
                "http://example.com/image.jpg", 8.8m, "http://example.com/trailer.mp4");

            _mockMovieService.Setup(service => service.GetMovieByIdAsync(It.IsAny<int>()))
                .ReturnsAsync(movie);

            var result = await _moviesController.GetMovieByIdAsync(1);

            var okResult = Assert.IsType<OkObjectResult>(result.Result);
            var returnMovie = Assert.IsType<Movie>(okResult.Value);
            Assert.Equal(movie.Id, returnMovie.Id);
        }

        [Fact]
        public async Task GetAllMovies_ReturnsNotFound_WhenNoMoviesExist()
        {
            _mockMovieService.Setup(service => service.GetAllMoviesAsync())
                .ReturnsAsync(new List<Movie>());

            var result = await _moviesController.GetAllMovies();

            Assert.IsType<NotFoundResult>(result.Result);
        }

        [Fact]
        public async Task GetAllMovies_ReturnsOkResult_WithMovies()
        {
            var movies = new List<Movie?>
            {
                Movie.Create(
                    "Shrek 5",
                    "very nice shrek description",
                    DateTimeOffset.Now,
                    "http://example.com/image.jpg",
                    8.8m,
                    "http://example.com/trailer.mp4")
            };
            _mockMovieService.Setup(service => service.GetAllMoviesAsync())
                .ReturnsAsync(movies);

            var result = await _moviesController.GetAllMovies();

            var okResult = Assert.IsType<OkObjectResult>(result.Result);
            var returnMovies = Assert.IsType<List<MovieDto>>(okResult.Value);
            Assert.Single(returnMovies);
        }

        [Fact]
        public async Task UpdateMovie_ReturnsNotFound_WhenMovieDoesNotExist()
        {
            _mockMovieService.Setup(service => service.GetMovieByIdAsync(It.IsAny<int>()))
                .ReturnsAsync((Movie)null);

            var movieDto = new MovieDto
            {
                Title = "Inception",
                Description = "A mind-bending movie",
                ReleaseDate = DateTimeOffset.Now,
                ImageUrl = "http://example.com/image.jpg",
                Rating = 8.8m,
                TrailerUrl = "http://example.com/trailer.mp4"
            };

            var result = await _moviesController.UpdateMovie(1, movieDto);

            Assert.IsType<NotFoundResult>(result);
        }

        [Fact]
        public async Task UpdateMovie_ReturnsOkResult_WithUpdatedMovie()
        {
            var movie = Movie.Create("Shrek 5", "very nice shrek description", DateTimeOffset.Now,
                "http://example.com/image.jpg", 8.8m, "http://example.com/trailer.mp4");
           
            var movieDto = new MovieDto
            {
                Title = "Shrek 5 Updated",
                Description = "very nice updated shrek description",
                ReleaseDate = DateTimeOffset.Now,
                ImageUrl = "http://example.com/image.jpg",
                Rating = 9.0m,
                TrailerUrl = "http://example.com/trailer.mp4"
            };

            _mockMovieService.Setup(service => service.GetMovieByIdAsync(It.IsAny<int>()))
                .ReturnsAsync(movie);

            _mockMovieService.Setup(service => service.UpdateMovieAsync(It.IsAny<Movie>()))
                .Returns(Task.CompletedTask);

            var result = await _moviesController.UpdateMovie(1, movieDto);

            var okResult = Assert.IsType<OkObjectResult>(result);
            var returnMovie = Assert.IsType<Movie>(okResult.Value);
            Assert.Equal(movieDto.Title, returnMovie.Title);
        }

        [Fact]
        public async Task SoftDeleteMovie_ReturnsNotFound_WhenMovieDoesNotExist()
        {
            _mockMovieService.Setup(service => service.GetMovieByIdAsync(It.IsAny<int>()))
                .ReturnsAsync((Movie)null);

            var result = await _moviesController.SoftDeleteMovie(1);

            Assert.IsType<NotFoundResult>(result);
        }

        [Fact]
        public async Task SoftDeleteMovie_ReturnsOkResult_WithSoftDeletedMovie()
        {
            var movie = Movie.Create("Shrek 5", "very nice shrek description", DateTimeOffset.Now,
                "http://example.com/image.jpg", 8.8m, "http://example.com/trailer.mp4");

            _mockMovieService.Setup(service => service.GetMovieByIdAsync(It.IsAny<int>()))
                .ReturnsAsync(movie);

            _mockMovieService.Setup(service => service.UpdateMovieAsync(It.IsAny<Movie>()))
                .Returns(Task.CompletedTask);

            var result = await _moviesController.SoftDeleteMovie(1);

            var okResult = Assert.IsType<OkObjectResult>(result);
            var returnMovie = Assert.IsType<Movie>(okResult.Value);
            Assert.True(returnMovie.IsDeleted);
        }

        [Fact]
        public async Task RestoreMovie_ReturnsNotFound_WhenMovieDoesNotExist()
        {
            _mockMovieService.Setup(service => service.GetMovieByIdAsync(It.IsAny<int>()))
                .ReturnsAsync((Movie)null);

            var result = await _moviesController.RestoreMovie(1);

            Assert.IsType<NotFoundResult>(result);
        }

        [Fact]
        public async Task RestoreMovie_ReturnsOkResult_WithRestoredMovie()
        {
            var movie = Movie.Create("Shrek 5", "very nice shrek description", DateTimeOffset.Now,
                "http://example.com/image.jpg", 8.8m, "http://example.com/trailer.mp4");

            _mockMovieService.Setup(service => service.GetMovieByIdAsync(It.IsAny<int>()))
                .ReturnsAsync(movie);

            _mockMovieService.Setup(service => service.UpdateMovieAsync(It.IsAny<Movie>()))
                .Returns(Task.CompletedTask);

            var result = await _moviesController.RestoreMovie(1);

            var okResult = Assert.IsType<OkObjectResult>(result);
            var returnMovie = Assert.IsType<Movie>(okResult.Value);
            Assert.False(returnMovie.IsDeleted);
            Assert.Null(returnMovie.DeletedAt);
        }
    }
}