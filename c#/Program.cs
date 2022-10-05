// Hello World! program

// namespace HelloWorld
// {
//     class Hello {         
//         static void Main(string[] args)
//         {
//             System.Console.WriteLine("Hello World C#!");
//         }
//     }
// }

/*

How the "Hello World!" program in C# works?
 
namespace HelloWorld{...}

The namespace keyword is used to define our own namespace. Here we are creating a namespace called HelloWorld.

Just think of namespace as a container which consists of classes, methods and other namespaces. To get a detailed overview 
of namespaces, visit C# Namespaces.
 
class Hello{...}

The above statement creates a class named - Hello in C#. Since, C# is an object-oriented programming language, creating a 
class is mandatory for the program’s execution.
 
static void Main(string[] args){...}

Main() is a method of class Hello. The execution of every C# program starts from the Main() method. So it is mandatory for 
a C# program to have a Main() method.

The signature/syntax of the Main() method is:
static void Main(string[] args)
{
    ...
}

*/

// Alternative Hello World! implementation

// Hello World! program
using System;
 
namespace HelloWorld
{
    class Hello {         
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World C#!");
        }
    }
}

/*

Notice in this case, we’ve written using System; at the start of the program. By using this, we can now replace

System.Console.WriteLine("Hello World!");

with

Console.WriteLine("Hello World!"); 

Things to remember from this article

Every C# program must have a class definition.
The execution of program begins from the Main() method.
Main() method must be inside a class definition.

*/