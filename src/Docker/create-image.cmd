docker build --no-cache -f SQL\Dockerfile.PostgreSql -t studentregistration/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t studentregistration/app ../..
