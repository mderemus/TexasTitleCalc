using Microsoft.EntityFrameworkCore;

namespace Summy.API.Models
{
  public class BloggingContext : DbContext
  {
    public BloggingContext()
    {
    }

    public BloggingContext(DbContextOptions<BloggingContext> options)
        : base(options)
    { }

    //public BloggingContext()
    //{
    //}

    public DbSet<Blog> Blogs { get; set; }
    public DbSet<Post> Posts { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
      optionsBuilder.UseSqlServer(@"Server=DESKTOP-PO84PUU;Database=TexasTitleCalc;Trusted_Connection=True;ConnectRetryCount=0");
    }

  }
}
