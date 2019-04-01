using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace web_api.Models
{
    public partial class Question
    {
        public Question()
        {
            Answer = new HashSet<Answer>();
        }

        public long Id { get; set; }
        [StringLength(255)]
        public string Title { get; set; }
        public short? MinValue { get; set; }
        public short? MaxValue { get; set; }
        public short? DefaultValue { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? TimeStamp { get; set; }
        public bool? ShowThumpLabel { get; set; }
        public bool? Disabled { get; set; }

        [InverseProperty("Question")]
        public virtual ICollection<Answer> Answer { get; set; }
    }
}