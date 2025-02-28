using Microsoft.OpenApi.Models;
using MovieMngmtSystem.Application;
using MovieMngmtSystem.Infrastructure;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddInfrastructure(builder.Configuration.GetConnectionString("Database"));
builder.Services.AddApplication();
builder.Services.AddControllers();
builder.Services.AddAuthentication();
builder.Services.AddAuthorization();

builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc(
        "v1",
        new OpenApiInfo
        {
            Title = "Movie Management System API",
            Version = "v1",
            Description = "API for managing movies."
        });
});


var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// app.UseHttpsRedirection();
// app.UseAuthentication();
// app.UseAuthorization();
app.MapControllers();
app.Run();