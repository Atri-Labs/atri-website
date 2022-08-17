FROM atrilabs/node16brew
USER python_user
RUN mkdir /home/python_user/code
COPY Pipfile.lock /home/python_user/code
COPY Pipfile /home/python_user/code
COPY assets /home/python_user/code/assets
COPY controllers /home/python_user/code/controllers
COPY atri_app /home/python_user/code/atri_app
COPY atri.app.json /home/python_user/code/atri.app.json
RUN echo "cd /home/python_user/code\npipenv run python -m controllers.server serve &\ncd /home/python_user/code/atri_app\nyarn run server" > /home/python_user/start.sh
USER root
RUN chown -R python_user /home/python_user
WORKDIR /home/python_user/code/atri_app
RUN yarn install && yarn run build && yarn run buildServer
RUN python3 -m pip install pipenv
WORKDIR /home/python_user/code
ENV LANG C.UTF-8
ENV LC_ALL C.UTF-8
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONFAULTHANDLER 1
RUN PIPENV_VENV_IN_PROJECT=1 pipenv install
RUN chown -R python_user /home/python_user
USER python_user
CMD ["/home/python_user/start.sh"]