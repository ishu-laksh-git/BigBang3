﻿using System.ComponentModel.DataAnnotations;

namespace TourPackagesAPI.Models
{
    public class gallery
    {
        [Key]
        public int PicId { get; set; }
        public int packageId { get; set; }
        public string PicUrl { get; set; }
    }
}
