USE [BD_VACUNACION_COVID]
GO

/****** Object:  Table [dbo].[PJ2]    Script Date: 3/12/2021 14:15:01 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[PJ2](
	[C_REGION] [varchar](200) NULL,
	[X_REGION] [varchar](200) NULL,
	[UBIGEO_RES] [varchar](200) NULL,
	[X_DEPA] [varchar](200) NULL,
	[X_PROV] [varchar](200) NULL,
	[X_DIST] [varchar](200) NULL,
	[C_POBLADO] [varchar](200) NULL,
	[X_POBLADO] [varchar](200) NULL,
	[ID_CORTE] [int] NULL,
	[IDHOGAR] [int] NULL,
	[CODIGOHOGAR] [int] NULL,
	[ID_TITULAR] [int] NULL,
	[DNI_TITULAR] [int] NULL,
	[PATERNO_TITULAR] [varchar](200) NULL,
	[MATERNO_TITULAR] [varchar](200) NULL,
	[NOMBRES_TITULAR] [varchar](200) NULL,
	[SEXO_TITULAR] [char](200) NULL,
	[FN_TITULAR] [varchar](200) NULL,
	[EDAD_TITULAR] [int] NULL,
	[CEL_TITULAR] [varchar](200) NULL
) ON [PRIMARY]
GO


