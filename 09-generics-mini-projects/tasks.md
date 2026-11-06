# Episode 09 - Assignment / Task

## Build a Generic Audit Log System

Your system must handle logging actions inside your application.

- Create a generic structure named `AuditLog<EventDetails>` where the metadata details can change depending on whether it is an auth event or a financial transaction event.
- Build an AuditLogger class that features a generic method named `logEvent<E>`(event: `AuditLog<E>`).
- Add a constraint that ensures all events must contain a timestamp: Date and an actorId: string.

Drop your solutions in the Discord Channel! I will personally review them to verify your architectures are solid.

Don’t forget to hit like, subscribe to keep leveling up your engineering skills, and I will see you in the next breakdown!"
