using Microsoft.EntityFrameworkCore;
using MovieMngmtSystem.Domain.Entities;

namespace MovieMngmtSystem.Infrastructure.Data;

public class ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : DbContext(options)
{
    public DbSet<Movie> Movies { get; set; }
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Movie>(entity =>
        {
            entity.HasKey(m => m.Id);
            entity.Property(c => c.Id)
                .ValueGeneratedOnAdd();
            entity.Property(m => m.Title).IsRequired().HasMaxLength(200);
            entity.Property(m => m.Description).HasMaxLength(1000);
            entity.Property(m => m.ReleaseDate).IsRequired();
            entity.Property(m => m.ImageUrl).HasMaxLength(500);
            entity.Property(m => m.Rating).HasColumnType("decimal(3,1)");
            entity.Property(m => m.TrailerUrl).HasMaxLength(500);
            entity.Property(m => m.IsDeleted).IsRequired().HasDefaultValue(false);
            entity.Property(m => m.DeletedAt).IsRequired(false);
        });
    }
}