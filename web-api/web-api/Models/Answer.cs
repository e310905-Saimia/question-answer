using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace web_api.Models
{
    public partial class Answer
    {
        public long Id { get; set; }
        public long? QuestionId { get; set; }
        public short? Value { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime? TimeStamp { get; set; }

        [ForeignKey("QuestionId")]
        [InverseProperty("Answer")]
        public virtual Question Question { get; set; }
    }
}