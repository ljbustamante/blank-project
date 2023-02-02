FROM postgres:12.7
ENV PG_MAX_WAL_SENDERS 8
ENV PG_WAL_KEEP_SEGMENTS 8

COPY docker-entrypoint.sh /docker-entrypoint-initdb.d/docker-entrypoint.sh
