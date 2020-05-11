using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using CmdApi.Models;
using Microsoft.EntityFrameworkCore;

namespace CmdApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommandsController : ControllerBase
    {

        private readonly CommandContext _context;

        public CommandsController(CommandContext context) => _context = context;

        //GET: api/commands
        [HttpGet]
        public ActionResult<IEnumerable<Command>> GetCommands()
        {
            return _context.CommandItems;
        }

        //GET: api/commands/n
        [HttpGet("{id}")]
        public ActionResult<Command> GetCommandItem(int id)
        {
            var commandItem = _context.CommandItems.Find(id);

            if (commandItem == null)
            {
                return NotFound();
            }

            return commandItem;
        }

        //POST: api/commands
        [HttpPost]
        public ActionResult<Command> PostCommandItem(Command command)
        {
            _context.CommandItems.Add(command);
            _context.SaveChanges();

            return CreatedAtAction("PostCommandItem", new Command{Id = command.Id}, command);
        }

        //PUT: api/command/n
        [HttpPut("{id}")]
        public ActionResult PutCommandItem(int id, Command command)
        {
            if (id != command.Id)
            {
                return BadRequest();
            }

            _context.Entry(command).State = EntityState.Modified;
            _context.SaveChanges();

            return NoContent();
        }

        //DELETE: api/commands/n
        [HttpDelete("{id}")]
        public ActionResult<Command> DeleteCommandItem(int id)
        {
            var commandItem = _context.CommandItems.Find(id);
            if (commandItem == null)
            {
                return NotFound();
            }

            _context.CommandItems.Remove(commandItem);
            _context.SaveChanges();

            return commandItem;
        }

        /*
        [HttpGet]
        public ActionResult<IEnumerable<string>> GetString()
        {
            return new string[] {"this","is","hard","coded"};
        }
        */
    }

}