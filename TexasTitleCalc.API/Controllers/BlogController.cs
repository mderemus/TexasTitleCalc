using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TexasTitleCalc.API.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TexasTitleCalc.API.Controllers
{
  [Route("api/[controller]")]
  public class BlogController : Controller
  {
    // GET: api/<controller>
    [HttpGet]
    public IEnumerable<Blog> Get()
    {
      var blogs = new List<Blog>();
      using (var context = new BloggingContext())
      {
        blogs = context.Blogs.ToList();
      }
      return blogs;
      //return new string[] { "value1", "value2" };
    }

    // GET api/<controller>/5
    [HttpGet("{id}")]
    public  IEnumerable<Blog> GetBlog(int id)
    {
      var blogs = new List<Blog>();
      using (var context = new BloggingContext())
      {
        

       blogs = context.Blogs
            .FromSql("EXECUTE dbo.GetMuhBlog {0}", id)
            .ToList();
      }
      return blogs;
      //return "value";
    }

    // POST api/<controller>
    [HttpPost]
    public IEnumerable<Blog> Post([FromBody]Blog req)
    {
      var blogs = new List<Blog>();
      using (var context = new BloggingContext())
      {


        blogs = context.Blogs
             .FromSql("EXECUTE dbo.GetMuhBlog {0}", req.BlogId)
             .ToList();
      }
      return blogs;
    }

    // PUT api/<controller>/5
    [HttpPut("{id}")]
    public void Put(int id, [FromBody]string value)
    {
    }

    // DELETE api/<controller>/5
    [HttpDelete("{id}")]
    public void Delete(int id)
    {
    }
  }
}
