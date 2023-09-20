using Azure.Storage.Blobs;
using ImagesAPI.Interfaces;
using ImagesAPI.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ImagesAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("MyCors")]
    public class ImagesController : ControllerBase
    {
        private readonly ITourImageService _tourService;
        public ImagesController(ITourImageService tourService)
        {
            _tourService = tourService;
        }
        [HttpGet("GettingImages")]
        public async Task<ActionResult<IEnumerable<Images>>> GetTourIages()
        {
            var imgs = await _tourService.GetTourImages();
            return Ok(imgs);
        }
        /* [HttpPost]
         public async Task<IActionResult> UploadImage([FromForm] UserModel model)
         {
             if (model.Image != null)
             {
                 string uploadsFolder = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "images");
                 string uniqueFileName = model.Image.FileName;
                 string filePath = Path.Combine(uploadsFolder, uniqueFileName);

                 using (var stream = new FileStream(filePath, FileMode.Create))
                 {
                     await model.Image.CopyToAsync(stream);
                 }

                 model.ImagePath = "wwwroot/images" + uniqueFileName;
             }

             _context.Users.Add(model);
             await _context.SaveChangesAsync();

             return Ok();
         }*/


        [HttpPost]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> UploadImage(int packageId, [FromForm] Images model)
        {
            if (model.Image != null && model.Image.Count > 0)
            {
                // Connect to Azurite Blob Storage
                // string connectionString = "UseDevelopmentStorage=true"; // Azurite connection string
                //BlobServiceClient blobServiceClient = new BlobServiceClient(connectionString);
                foreach(var image in model.Image)
                {
                    if(image != null)
                    {
                        await _tourService.AddTourImage(packageId, image, model.Name);
                    }
                }
            }
            return Ok();
        }
    }
}
