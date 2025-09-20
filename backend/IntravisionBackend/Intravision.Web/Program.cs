using Intravision.Domain.Abstractions;
using Intravision.DataAccess;
using Intravision.DataAccess.Repo;
using Intravision.Application.Services;
using Microsoft.EntityFrameworkCore;



var builder = WebApplication.CreateBuilder(args);


string connection = builder.Configuration.GetConnectionString("DefaultConnection")!;

builder.Services.AddDbContext<IntravisionDbContext>(options => options.UseSqlite(connection));



builder.Services.AddControllers();

builder.Services.AddScoped<IGoodService, GoodService>();
builder.Services.AddScoped<IGoodRepo, GoodRepo>();
builder.Services.AddScoped<IBrandService, BrandService>();
builder.Services.AddScoped<IBrandRepo, BrandRepo>();
builder.Services.AddScoped<ICoinService, CoinService>();
builder.Services.AddScoped<ICoinRepo, CoinRepo>();
builder.Services.AddScoped<IOrderService, OrderService>();
builder.Services.AddScoped<IOrderRepo, OrderRepo>();
//builder.Services.AddOpenApi();

builder.Services.AddSwaggerGen();



var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    //app.MapOpenApi();
    app.UseSwagger();
    app.UseSwaggerUI();
}

//app.UseHttpsRedirection();
//app.UseAuthorization();

app.UseCors(x =>
{
    x.WithHeaders().AllowAnyHeader();
    x.WithOrigins("http://localhost:3000");
    x.WithMethods().AllowAnyMethod();
});
//app.UseRouting();
app.MapControllers();

app.Run();
