# JavaScript Under the Hood 


A comprehensive personal sandbox and deep-dive laboratory dedicated to mastering core JavaScript mechanisms, asynchronous architecture, object-oriented principles, and modern styling pipelines.

##Repository Structure

* `javascriptFiles/` — Core implementation scripts covering:
    * **Asynchronous JS:** Promises, Event Loop mechanics, Callbacks, and `setTimeout` scheduling.
    * **OOP & Execution:** Constructor functions, `this` context binding (`.call()`), encapsulation, and syntactic sugar layers.
    * **DOM & Events:** Dynamic interface manipulation and event handling structures.
* `src/input.css` & `dist/output.css` — A streamlined styling compilation pipeline powered by **Tailwind CSS**.

---

## Core Concepts Explored

### 1. The Execution Brain & Memory
Understanding the lifecycle of the **Global Execution Context (GEC)** during its creation and execution phases, tracking how the **Call Stack** handles synchronous execution frames (LIFO layout), and preventing stack overflows.

### 2. The Asynchronous Event Loop
Analyzing how the JavaScript runtime handles non-blocking operations by offloading tasks to Web APIs, and how the **Event Loop** enforces prioritization between the high-priority **Microtask Queue** (Promises/`fetch`) and the **Task Queue** (`setTimeout`).

### 3. Context & Prototype Management
Explicitly overriding execution contexts using the `.call()` method for constructor chaining and function borrowing, alongside clean object encapsulation models.

---

##Local Development Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/INAYAT-ULLAH67/YOUR-REPO-NAME.git](https://github.com/INAYAT-ULLAH67/YOUR-REPO-NAME.git)
   cd YOUR-REPO-NAME# javascript-under-the-hood