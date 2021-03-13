# Process Manager (need to finish docs)

This is a small project to simulate how an operational system works when allocating memory for processes being started.

## Concepts

Below, is the explanation about some concepts presented in the project.

### Intern Fragment

Happens when process is allocated on memory, but, theres's still some space left on it. Ex.:

> Assumming that Process 1 (511 bytes) has been allocated on a page, and the page size in this architecture is 512 bytes. You will have an intern fragment of 1 byte.
