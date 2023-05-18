const Blog = () => {
  return (
    <div className="container mx-auto my-20 space-y-10 px-2 md:px-0">
      <div>
        <h1 className="font-bold text-3xl mb-7 font-archivo">
          1. What is an access token and refresh token? How do they work and
          where should we store them on the client-side?
        </h1>
        <p className="font-archivo text-lg">
          1. Access Token: <br />
          An access token is a credential that represents the authorization
          granted to a client application to access specific resources on behalf
          of a user. It is typically a string of characters and is issued by an
          authentication server or identity provider after the user has
          successfully authenticated. The access token contains information
          about the user and their permissions and is included in each request
          to access protected resources. It serves as proof of authorization and
          allows the client application to interact with the server on behalf of
          the user. <br /> <br />
          2. Refresh Token: <br />
          A refresh token is a long-lived credential used to obtain a new access
          token when the current access token expires. Access tokens have a
          limited lifespan to enhance security and mitigate the risk of misuse.
          When an access token expires, the client can use the refresh token to
          request a new access token without requiring the user to
          re-authenticate. The refresh token is typically issued alongside the
          access token during the initial authentication process. <br /> <br />
          The process typically works as follows:
          <br />
          <br />
          <ul className="list-disc space-y-3 ml-10">
            <li>
              The client application sends a request to the authentication
              server with the user's credentials to obtain an access token and
              refresh token.
            </li>
            <li>
              The authentication server verifies the credentials and, if valid,
              issues an access token and refresh token.
            </li>
            <li>
              The client stores the access token securely, often in memory, as
              it is short-lived and needs to be sent with each request to access
              protected resources.
            </li>
            <li>
              The client securely stores the refresh token, often in a more
              persistent storage medium such as a secure cookie or local
              storage.
            </li>
            <li>
              When the access token expires, the client uses the stored refresh
              token to request a new access token from the authentication
              server.
            </li>
            <li>
              The authentication server validates the refresh token and, if
              valid, issues a new access token to the client.
            </li>
            <li>
              The process repeats as long as the refresh token remains valid,
              allowing the client to obtain new access tokens without requiring
              the user to re-authenticate.
            </li>
          </ul>
        </p>
      </div>
      <div>
        <h1 className="font-bold text-3xl mb-7 font-archivo">
          2. Compare SQL and NoSQL databases?
        </h1>
        <p className="font-archivo text-lg">
          SQL databases:
          <ul className="list-disc space-y-3 ml-10 mt-2">
            <li>
              ACID Compliance: SQL databases are designed to ensure ACID
              properties. Atomicity guarantees that transactions are treated as
              a single unit of work, ensuring that all changes are committed or
              rolled back together. Consistency ensures that data always meets
              predefined rules and constraints. Isolation ensures that
              concurrent transactions do not interfere with each other.
              Durability guarantees that committed data is persisted and
              recoverable even in the event of system failures.
            </li>
            <li>
              Mature Ecosystem: SQL databases have been around for decades and
              have a mature ecosystem with well-established tools, frameworks,
              and expertise. There are a wide variety of SQL database systems
              available, such as MySQL, PostgreSQL, Oracle, Microsoft SQL
              Server, and others, providing a range of features and
              capabilities.
            </li>
          </ul>
          <br />
          NoSQL databases:
          <ul className="list-disc space-y-3 ml-10 mt-2">
            <li>
              High Scalability: NoSQL databases are designed to scale
              horizontally by distributing data across multiple servers or
              nodes. They can handle massive data volumes and high traffic loads
              by adding more servers to the system. This makes them suitable for
              applications that require rapid and seamless scaling.
            </li>
            <li>
              Flexible Data Models: NoSQL databases offer a variety of data
              models, allowing developers to choose the most suitable one for
              their specific use case. Document databases like MongoDB provide a
              flexible and JSON-like document structure, while key-value stores
              like Redis excel at simple data retrieval. Wide-column stores like
              Cassandra are optimized for handling large-scale, distributed
              data, and graph databases like Neo4j are designed for
              relationship-oriented data.
            </li>
            <li>
              Eventual Consistency: Many NoSQL databases employ an eventual
              consistency model, where data changes may take some time to
              propagate and become consistent across all replicas. This approach
              allows for greater scalability and availability but sacrifices
              immediate consistency. However, some NoSQL databases offer
              stronger consistency models as well, depending on the specific
              requirements of the application.
            </li>
          </ul>
        </p>
      </div>
      <div>
        <h1 className="font-bold text-3xl mb-7 font-archivo">
          3. What is express js? What is Nest JS?
        </h1>
        <p className="font-archivo text-lg">
          Express.js is designed to be unopinionated, allowing developers to
          structure their applications according to their preferences. It
          provides a minimalistic core that focuses on essential web application
          functionality, enabling developers to add additional features and
          libraries as needed. This flexibility makes Express.js suitable for
          both small projects and large-scale applications. <br />
          With its streamlined API and straightforward syntax, Express.js
          reduces the complexity of building server-side applications and APIs
          in Node.js. It has a vibrant and active community, which contributes
          to its rich ecosystem of plugins, middleware, and extensions. This
          extensive ecosystem enables developers to easily integrate additional
          functionalities into their Express.js applications, such as
          authentication, validation, logging, and database connectivity.
          Express.js has gained popularity for its simplicity, performance, and
          versatility. It has become a go-to choice for developers looking to
          build web applications and APIs using Node.js, offering a solid
          foundation for creating robust and scalable server-side applications.
        </p>
        <p className="font-archivo text-lg">
          NestJS is a progressive and opinionated web application framework for
          building efficient, scalable, and maintainable server-side
          applications using TypeScript. It is built on top of Node.js and
          leverages the powerful features of TypeScript, such as static typing,
          decorators, and modules, to provide a structured and organized
          approach to application development.
          <br />
          <br />
          Key features and concepts of NestJS include:
          <br />
          <br />
          <ul className="list-disc space-y-3 ml-10 mt-2">
            <li>
              TypeScript: NestJS is built with TypeScript, a statically typed
              superset of JavaScript. TypeScript brings benefits like enhanced
              code readability, better maintainability, and improved tooling
              support, making development more efficient and reliable.
            </li>
            <li>
              Modularity: NestJS promotes a modular architecture, allowing
              developers to organize their applications into modules that
              encapsulate related features and functionality. Modules provide a
              clear separation of concerns, making it easier to manage
              dependencies and facilitate code reusability.
            </li>
            <li>
              Dependency Injection: NestJS employs the concept of dependency
              injection, which helps manage the creation and injection of
              dependencies into classes. This promotes loose coupling and
              facilitates testing and maintainability of applications.
            </li>
            <li>
              Decorators and Metadata: NestJS utilizes decorators and metadata
              to define and configure various aspects of the application.
              Decorators provide a way to annotate classes, methods, and
              properties, enabling the framework to automatically handle tasks
              such as routing, parameter validation, and more.
            </li>
          </ul>
        </p>
      </div>
      <div>
        <h1 className="font-bold text-3xl mb-7 font-archivo">
          4. What is MongoDB aggregate and how does it work?
        </h1>

        <p className="font-archivo text-lg">
          In MongoDB, the aggregate function is used to perform advanced data
          processing and analysis operations on the documents in a collection.
          It allows for complex transformations, aggregations, and computations
          on the data. <br />
          <br />
          The aggregate function works by taking a pipeline as its parameter. A
          pipeline is an array of stages, where each stage performs a specific
          operation on the documents in the collection. The output of one stage
          becomes the input for the next stage, forming a sequence of data
          transformations. <br />
          <br />
          Each stage in the pipeline applies an operator to the documents and
          produces an intermediate result. The operators used in the pipeline
          can perform various tasks such as filtering, grouping, sorting,
          joining, projecting fields, performing mathematical computations, and
          more. <br />
          <br />
          The stages in the pipeline can include operations like $match, $group,
          $sort, $project, $unwind, $lookup, and many others. These stages
          enable developers to define complex queries and aggregations to
          extract, transform, and analyze data in a flexible manner. <br />
          <br />
          The aggregate function executes the pipeline stages in the specified
          order, starting with the initial set of documents in the collection.
          As the documents pass through each stage, they are processed and
          transformed according to the operations defined in the pipeline. The
          final result of the aggregation is returned as a result set. <br />
          <br />
          Aggregate queries in MongoDB are powerful and versatile, allowing for
          a wide range of data manipulation and analysis tasks. They are
          particularly useful for performing complex aggregations, generating
          reports, performing statistical computations, and extracting insights
          from large datasets stored in MongoDB collections.
        </p>
      </div>
    </div>
  );
};

export default Blog;
