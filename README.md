# Process Manager 🚧(need to finish docs)🏗️

This is a small project to simulate how an operational system works when allocating memory for processes being started.

## Concepts

Below, is the explanation about some concepts presented in the project.

### Intern Fragment

Happens when process is allocated on a page from memory, but, the page space is not fulfilled by the process. Ex.:

> Assumming that Process 1 (511 bytes) has been allocated on a page, and the page size in this architecture is 512 bytes. You will have an intern fragment of 1 byte.

![image](https://user-images.githubusercontent.com/61251953/122653593-f6cec400-d11b-11eb-9233-21247d0e7586.png)

### External Fragment

![image](https://user-images.githubusercontent.com/61251953/122653691-aa37b880-d11c-11eb-926f-72aea148850a.png)

### PID Assignment

Every new process that is allocated on memory, receives an ascending ordered number and unique.

![image](https://user-images.githubusercontent.com/61251953/122653618-267dcc00-d11c-11eb-9b31-99211b82b2c6.png)

