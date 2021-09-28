{{ form.csrf\_token }}

{{ form.name.label }} {{ form.name }}

{{ form.start\_date.label }} {{ form.start\_date }}

{{ form.start\_time.label }} {{ form.start\_time }}

{{ form.end\_date.label }} {{ form.end\_date }} {% if form.end\_date.errors %}

-   {{ error }}

{% endif %}

{{ form.end\_time.label }} {{ form.end\_time }}

{{ form.description.label }} {{ form.description }}

{{ form.private.label }} {{ form.private }}

{{ form.submit }}

{% for slot in timeslots %}

{{ slot.time.strftime("%H:%M") }}

{% if slot.appointment %}

{{ slot.appointment.name }}

{% elif slot.open %}

{% endif %} {% endfor %}
