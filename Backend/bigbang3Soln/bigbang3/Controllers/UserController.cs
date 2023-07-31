using bigbang3.Interfaces;
using bigbang3.Models;
using bigbang3.Models.DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Linq.Expressions;

namespace bigbang3.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IService _userService;
        private readonly IRepo<User, string> _userRepo;
        private readonly IRepo<Traveller, string> _travellerRepo;
        private readonly IRepo<Agent, string> _agentRepo;

        public UserController(IService userService, IRepo<User,string> userRepo,
                              IRepo<Traveller,string> travellerRepo,IRepo<Agent,string> agentRepo)
        {
            _agentRepo = agentRepo;
            _userService = userService;
            _userRepo = userRepo;
            _travellerRepo = travellerRepo;
        }

        [HttpPost]
        [ProducesResponseType(typeof(UserDTO), StatusCodes.Status201Created)]//Success Response
        [ProducesResponseType(StatusCodes.Status400BadRequest)]//Failure Response

        public async Task<ActionResult<UserDTO?>> RegisterAgent(AgentRegDTO agentDTO)
        {
            try
            {
                var agent = await _userService.AgentRegister(agentDTO);
                if (agent != null)
                    return Created("Registered! :)", agent);
                return BadRequest("Unable to register");
            }
            catch (Exception) {
                return BadRequest("Network error!");
            }
        }


        [HttpPost]
        [ProducesResponseType(typeof(UserDTO), StatusCodes.Status201Created)]//Success Response
        [ProducesResponseType(StatusCodes.Status400BadRequest)]//Failure Response

        public async Task<ActionResult<UserDTO?>> RegisterTraveller(TravellerRegDTO travellerDTO)
        {
            try
            {
                var traveller = await _userService.TravellerRegister(travellerDTO);
                if (traveller != null)
                    return Created("Registered! :)", traveller);
                return BadRequest("Unable to register");
            }
            catch (Exception)
            {
                return BadRequest("Network error!");
            }
        }

        [HttpPost]
        [ProducesResponseType(typeof(UserDTO), StatusCodes.Status200OK)]//Success Response
        [ProducesResponseType(StatusCodes.Status400BadRequest)]//Failure Response
        public async Task<ActionResult<UserDTO?>> Login(UserDTO userDTO)
        {
            try
            {
                var user = await _userService.Login(userDTO);
                if (user != null)
                {
                    return Ok(user);
                }
                return BadRequest("Unable to login");
            }
            catch (Exception)
            {
                return BadRequest("Network error...Please try later");
            }
        }

    }
}
