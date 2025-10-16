using System.ComponentModel.DataAnnotations;

namespace TaskManagement.API.Models
{
    public class TaskItem
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(200)]
        public string Title { get; set; } = string.Empty;

        [MaxLength(1000)]
        public string Description { get; set; } = string.Empty;

        public DateTime DueDate { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        [Required]
        public TaskStatus Status { get; set; } = TaskStatus.Pending;

        [Required]
        public int UserId { get; set; }
        public User User { get; set; } = null!;
    }

    public enum TaskStatus
    {
        Pending,
        InProgress,
        Completed
    }
}