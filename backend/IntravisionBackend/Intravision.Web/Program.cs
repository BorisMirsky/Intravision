using Intravision.Domain.Abstractions;
using Intravision.DataAccess;
using Intravision.DataAccess.Repo;
using Intravision.Application.Services;
using Microsoft.EntityFrameworkCore;
using System.Text;
using Microsoft.AspNetCore.Authorization;
//using Intravision.Application.Scripts;


var builder = WebApplication.CreateBuilder(args);


string connection = builder.Configuration.GetConnectionString("DefaultConnection")!;

builder.Services.AddDbContext<IntravisionDbContext>(options => options.UseSqlite(connection));



builder.Services.AddControllers();

builder.Services.AddScoped<IGoodService, GoodService>();

builder.Services.AddOpenApi();

builder.Services.AddSwaggerGen();



var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
