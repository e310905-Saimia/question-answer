using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace web_api.Models
{
    public partial class QuestionanswerContext : DbContext
    {
        public QuestionanswerContext()
        {
        }

        public QuestionanswerContext(DbContextOptions<QuestionanswerContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Answer> Answer { get; set; }
        public virtual DbSet<Question> Question { get; set; }

//        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
//        {
//            if (!optionsBuilder.IsConfigured)
//            {
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
//                optionsBuilder.UseSqlServer("Data Source=DKO-S010A-016\\SQLEXPRESS;Initial Catalog=QuestionAnswer;Integrated Security=True");
//            }
//        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.0-rtm-35687");

            modelBuilder.Entity<Answer>(entity =>
            {
                entity.Property(e => e.TimeStamp).HasDefaultValueSql("(getdate())");

                entity.HasOne(d => d.Question)
                    .WithMany(p => p.Answer)
                    .HasForeignKey(d => d.QuestionId)
                    .HasConstraintName("FK_Answer_Question");
            });

            modelBuilder.Entity<Question>(entity =>
            {
                entity.Property(e => e.DefaultValue).HasDefaultValueSql("((50))");

                entity.Property(e => e.Disabled).HasDefaultValueSql("((0))");

                entity.Property(e => e.MaxValue).HasDefaultValueSql("((100))");

                entity.Property(e => e.MinValue).HasDefaultValueSql("((0))");

                entity.Property(e => e.ShowThumpLabel).HasDefaultValueSql("((1))");

                entity.Property(e => e.TimeStamp).HasDefaultValueSql("(getdate())");

                entity.Property(e => e.Title).IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}