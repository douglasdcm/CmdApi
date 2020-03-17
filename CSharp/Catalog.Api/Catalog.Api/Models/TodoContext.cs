using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace TodoApi.Models
{
    public class TodoContext : DbContext
    {
            public TodoContext(DbContextOptions options )
                : base(options)
        {
        }

        public DbSet<TodoItem> TodoItems { get; set; }
        
    }
}
