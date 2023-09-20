using Azure.Storage.Blobs;
using ImagesAPI.Interfaces;
using ImagesAPI.Models;

namespace ImagesAPI.Services
{
    public class TourImageService : ITourImageService
    {
        private readonly IRepo<int, Images> _imageRepo;
        public TourImageService(IRepo<int,Images> imageRepo)
        {
            _imageRepo = imageRepo;
        }
        public async Task<Images> AddTourImage(int packageId, IFormFile image, string name)
        {
            string connectionString = "BlobEndpoint=http://127.0.0.1:10000/devstoreaccount1;SharedAccessSignature=sv=2021-10-04&ss=btqf&srt=sco&st=2023-08-09T18%3A28%3A13Z&se=2023-08-10T18%3A28%3A13Z&sp=rwxftlacup&sig=w5u3PysIUMSKU8twZqSwlQ6OZW4FuwgM8tnF%2FQMfDJM%3D;";
            BlobServiceClient blobServiceClient = new BlobServiceClient(connectionString);
            BlobContainerClient containerClient = blobServiceClient.GetBlobContainerClient("samples-workitems");

            // Create the container if it doesn't exist
            containerClient.CreateIfNotExists();

            // Generate a unique blob name
            string uniqueBlobName = Guid.NewGuid().ToString() + System.IO.Path.GetExtension(image.FileName);

            // Upload the image to Azure Blob Storage
            BlobClient blobClient = containerClient.GetBlobClient(uniqueBlobName);
            using (var stream = image.OpenReadStream())
            {
                await blobClient.UploadAsync(stream, true);
            }
            Images tourImage = new Images
            {
                Name = name,
                ImagePath = blobClient.Uri.ToString(),
                packageId = packageId
            };
            return await _imageRepo.Add(tourImage);

        }

        public Task<Images> GetImage(int id)
        {
            throw new NotImplementedException();
        }

        public Task<ICollection<Images>> GetTourImages()
        {
            throw new NotImplementedException();
        }
    }
}
