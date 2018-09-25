# dojo-bot

## Entidades

### teams

Consideramos a `team` como una entidad que describe un equipo de personas que realiza una daily.

| Columna      | Tipo     | Descripción                                                                                                                                  |
| ------------ | -------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| id           | integer  |                                                                                                                                              |
| name         | text     | Nombre de equipo.                                                                                                                            |
| weekdays     | text     | Máscara que indica los días en que se pide daily. Por ejemplo: `1234567` significa _todos los días_, `12345` significa _de lunes a viernes_. |
| time_to_send | text     | Hora a la que el bot pide el status.                                                                                                         |

### users

Un `user` es un participante de la daily.

| Columna  | Tipo      | Descripción                         |
| -------- | --------- | ----------------------------------- |
| id       | integer   |                                     |
| username | text      | Usuario de Slack.                   |
| email    | text      | E-mail del usuario en Slack.        |

### team_users

Es la relación intermedia entre usuarios y equipos.

### team_questions

Representa las preguntas que hará el bot en cada daily.

| Columna  | Tipo      | Descripción                         |
| -------- | --------- | ----------------------------------- |
| id       | integer   |                                     |
| team_id  | integer   | Equipo que usa la pregunta.         |
| question | text      | Texto de la pregunta.               |

### user_dailies

Representa el estado de la daily de un usuario (si está aún respondiendo preguntas, si ya terminó, etc.).

| Columna    | Tipo      | Descripción                                                                              |
| ---------- | --------- | ---------------------------------------------------------------------------------------- |
| id         | integer   |                                                                                          |
| user_id    | integer   | Usuario que está reportando la daily.                                                    |
| date_time  | date      | Fecha y hora en que empezó el reporte.                                                   |
| status     | text      | "in_progress" si la daily está en curso; "finished" si ya respondió todas las preguntas. |

### daily_answers

Representa las respuestas de un usuario en la daily.

| Columna        | Tipo      | Descripción                         |
| -------------- | --------- | ----------------------------------- |
| id             | integer   |                                     |
| user_daily_id  | integer   | Usuario que está reportando.        |
| question       | text      | Texto de la pregunta.               |
| answer         | text      | Texto de la respuesta.              |
