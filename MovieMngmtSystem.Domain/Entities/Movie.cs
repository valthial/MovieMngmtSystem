namespace MovieMngmtSystem.Domain.Entities;

public sealed class Movie
{
    private Movie(){ }
    public int Id { get; set; }
    public string Title { get; private set; }
    public string Description { get; private set; }
    public DateTimeOffset ReleaseDate { get; private set; }
    public string ImageUrl { get; private set; }
    public decimal Rating { get; private set; }
    public string TrailerUrl { get; private set; }
    public bool IsDeleted { get; set; }
    public DateTimeOffset? DeletedAt { get; set; }

    public static Movie? Create(string title, string description, DateTimeOffset releaseDate, string imageUrl, decimal rating, string trailerUrl)
    {
        return new Movie()
        {
            Title = title,
            Description = description,
            ReleaseDate = releaseDate,
            ImageUrl = imageUrl,
            Rating = rating,
            TrailerUrl = trailerUrl,
            IsDeleted = false,
            DeletedAt = null
        };
    }
    
    public void Update(string title, string description, DateTimeOffset releaseDate, string imageUrl, decimal rating, string trailerUrl)
    {
        Title = title;
        Description = description;
        ReleaseDate = releaseDate;
        ImageUrl = imageUrl;
        Rating = rating;
        TrailerUrl = trailerUrl;
    }
    
    public void SoftDelete()
    {
        IsDeleted = true;
        DeletedAt = DateTimeOffset.UtcNow;
    }

    public void Restore()
    {
        IsDeleted = false;
        DeletedAt = null;
    }
}