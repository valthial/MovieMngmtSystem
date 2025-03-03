namespace MovieMngmtSystem.Api.DTOs;

public class MovieDto
{
    public string Title { get; set; }
    public string Description { get; set; }
    public DateTimeOffset ReleaseDate { get; set; }
    public string ImageUrl { get; set; }
    public decimal Rating { get; set; }
    public string TrailerUrl { get; set; }
}